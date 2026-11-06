
const pdfParse = require("pdf-parse");
const {
    generateInterviewReport,
    generateResumePdf
} = require("../services/ai.service");

const interviewReportModel = require("../models/interviewReport.model");

/**
 * @description Generate interview report based on resume,
 * self-description and job description.
 */
async function generateInterViewReportController(req, res) {
    try {
        let resumeText = "";

        // Extract resume text only if a resume is uploaded
        if (req.file) {
            const resumeContent = await (
                new pdfParse.PDFParse(
                    Uint8Array.from(req.file.buffer)
                )
            ).getText();

            resumeText = resumeContent.text;
        }

        const { selfDescription, jobDescription } = req.body;

        // Validate input
        if (!jobDescription || (!resumeText && !selfDescription)) {
            return res.status(400).json({
                message: "Job description and either resume or self-description are required."
            });
        }

        // Generate interview report using AI
        const interViewReportByAi = await generateInterviewReport({
            resume: resumeText,
            selfDescription,
            jobDescription
        });

        // Save report in database
        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeText,
            selfDescription,
            jobDescription,
            ...interViewReportByAi
        });

        return res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport
        });

    } catch (error) {
        console.error("Interview report generation error:", error);

        return res.status(500).json({
            message: "Failed to generate interview report.",
            error: error.message
        });
    }
}

/**
 * @description Get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {
    try {
        const { interviewId } = req.params;

        const interviewReport = await interviewReportModel.findOne({
            _id: interviewId,
            user: req.user.id
        });

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            });
        }

        return res.status(200).json({
            message: "Interview report fetched successfully.",
            interviewReport
        });

    } catch (error) {
        console.error("Fetch interview report error:", error);

        return res.status(500).json({
            message: "Failed to fetch interview report."
        });
    }
}

/**
 * @description Get all interview reports of logged-in user.
 */
async function getAllInterviewReportsController(req, res) {
    try {
        const interviewReports = await interviewReportModel
            .find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .select(
                "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan"
            );

        return res.status(200).json({
            message: "Interview reports fetched successfully.",
            interviewReports
        });

    } catch (error) {
        console.error("Fetch all interview reports error:", error);

        return res.status(500).json({
            message: "Failed to fetch interview reports."
        });
    }
}

/**
 * @description Generate resume PDF based on interview report.
 */
async function generateResumePdfController(req, res) {
    try {
        const { interviewReportId } = req.params;

        const interviewReport = await interviewReportModel.findOne({
            _id: interviewReportId,
            user: req.user.id
        });

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            });
        }

        const { resume, jobDescription, selfDescription } = interviewReport;

        const pdfBuffer = await generateResumePdf({
            resume,
            jobDescription,
            selfDescription
        });

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
        });

        return res.send(pdfBuffer);

    } catch (error) {
        console.error("Resume PDF generation error:", error);

        return res.status(500).json({
            message: "Failed to generate resume PDF."
        });
    }
}

module.exports = {
    generateInterViewReportController,
    getInterviewReportByIdController,
    getAllInterviewReportsController,
    generateResumePdfController
};
