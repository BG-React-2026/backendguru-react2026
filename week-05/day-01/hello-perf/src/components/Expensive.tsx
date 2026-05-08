// rafce
// Pahalı bileşen
// WYSWYG editor, Maps, 1000 elemanlı liste

import React from "react";

export type Person = {
  name: string;
};

type Props = {
  person: Person;
};

const Expensive = React.memo(({ person }: Props) => {
  console.log("RENDERED: Expensive");
  return <div>Expensive: {person.name}</div>;
});

export default Expensive;
