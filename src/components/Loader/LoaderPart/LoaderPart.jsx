import React from 'react'
import ContentLoader from "react-content-loader";


export default function LoaderPart() {
  return (
    <ContentLoader
      foregroundColor="#cac0c0"
      viewBox="0 0 720 520"
      className="LoaderPart"
      speed={1}
    >
      <rect x="0" y="0" rx="2" ry="2" width="720" height="520" />
    </ContentLoader>
  );
}
