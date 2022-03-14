import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare';
//import { Widget as IdWidget } from '@ncwidgets/id'
//import { PathnameControl, PathnamePreview } from 'netlify-cms-widget-pathname';
//import idWidget from 'netlify-cms-widget-simple-uuid';
//import {UuidControl, UuidPreview} from 'netlify-cms-widget-uuid-v4'; 

//CMS.registerWidget('pathname', PathnameControl, PathnamePreview);
//CMS.registerWidget(IdWidget)
//CMS.registerWidget('id', idWidget.Control, idWidget.Preview);
//CMS.registerWidget('uuid', UuidControl, UuidPreview)
CMS.init()
CMS.registerMediaLibrary(uploadcare);