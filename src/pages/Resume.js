import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      

      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <Document
          file="/Dinesh-Pawar-Resume.pdf"
          onLoadSuccess={onLoadSuccess}
          loading={<p className="text-center">Loading PDF...</p>}
        >
          <Page
            pageNumber={1}
            width={window.innerWidth - 100}
          />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
