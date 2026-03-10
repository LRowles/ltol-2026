import { useParams } from "react-router-dom";
import { assessments } from "@/data/assessments";
import AssessmentTemplate from "@/components/templates/AssessmentTemplate";
import NotFound from "./NotFound";

const AssessmentPage = () => {
  const { slug } = useParams();
  const assessment = assessments.find((a) => a.slug === slug);
  if (!assessment) return <NotFound />;
  return <AssessmentTemplate assessment={assessment} />;
};

export default AssessmentPage;
