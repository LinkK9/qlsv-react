import { useParams } from "react-router-dom";
import StudentDetailForm from "../StudentDetailForm";
import { usePromiseResult } from "use-promise-result";
import { getStudent, modifyStudentAction } from "../../servies/StudentService";

export default function ModifyStudent() {
  let { id } = useParams();
  const { loading, error, success, reload, data } = usePromiseResult(() =>
    getStudent(id)
  );

  const renderForm = () => {
    return <StudentDetailForm initialValues={data} action={modifyStudentAction} />;
  };

  const renderStatus = () => {
    if (loading) return <div>loading..</div>;
    if (error) return "Error...";
  };
  return <div>{success ? renderForm() : renderStatus()}</div>;
}
