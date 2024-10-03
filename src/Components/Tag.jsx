import React from 'react';

export default function Tag({ ToTag }) {
  const tags = ToTag.tags;
  const tagsDiv = tags.map((tag) => (
    <div key={tag} className="tag">
      {tag}
    </div>
  ));

  return <div className="tagList">{tagsDiv}</div>;
}
