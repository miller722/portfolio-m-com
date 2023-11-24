import { useEffect } from "react";
import resumePDF from "./../../../public/files/MykhailosResume.pdf";

const Resume = () => {
    useEffect(() => {
        const openResumePDF = () => {
            window.open(resumePDF, "_blank");
        };
        openResumePDF();
    }, []);
    return (
        <div>
        </div>
    )
}

export default Resume;
