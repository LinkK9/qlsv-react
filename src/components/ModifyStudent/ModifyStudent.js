import { useParams } from "react-router-dom";

export default function ModifyStudent() {
  let { id } = useParams();

  return "Student id:" + id;
}
