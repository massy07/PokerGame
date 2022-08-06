import React, { FC } from 'react';

// style
import './TemplateName.scss';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
  <div className="templateName" data-testid="templateName">
    TemplateName Component
  </div>
);

export default React.memo(TemplateName); 
