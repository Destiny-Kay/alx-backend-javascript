export default function getListStudentIds(objects) {
  const studentIds = [];
  if (!Array.isArray(objects)) {
    return studentIds;
  }
  objects.map((item) => (
    studentIds.push(item.id)
  ));
  return studentIds;
}
