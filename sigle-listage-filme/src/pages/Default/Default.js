import React from "react";
import AriaModalNew from "../../components/Modal/AriaModalNew";

function DefaultPage() {
  return (
    <div className='containerDefault' id='default'>
      <h1 className='mt-4'><strong>Explicação da Aplicação</strong></h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      ldus PageMaker including versions of Lorem.<br />
      <strong className='text-danger d-block mt-3 mb-3'>Abre o Modal e veja mais opçoes</strong>
      
      <AriaModalNew />
    </div>
  );
}

export default DefaultPage;
