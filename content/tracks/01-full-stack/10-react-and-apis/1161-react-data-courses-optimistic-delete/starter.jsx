function CourseManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.title}</li>)}</ul>;
}
