import React, { FC } from 'react';

// style
import './TemplateName.scss';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => { 

  console.log('TemplateName');

  return (
    <>   
      <div className="templateName" data-testid="templateName">
        TemplateName Component
      </div>
    </>
  );
};

export default React.memo(TemplateName); 