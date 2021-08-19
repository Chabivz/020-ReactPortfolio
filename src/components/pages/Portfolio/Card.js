import React from 'react';


export default function funCard(props) {
  return (
    <div class="card border-dark mb-3">
      <div class="card-header">{props.title}</div>
      <div class="card-body text-dark">
        <h5 class="card-title">props.link</h5>
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
}
