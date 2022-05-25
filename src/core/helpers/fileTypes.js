// file types for the file uploader

export const fileType={
    image: /\.(jpe?g|png|gif|bmp|svg)$/i,
    video: /\.(mp4|webm|ogg|mp3|wav|flac|aac|m4a)$/i,
    audio: /\.(mp3|wav|flac|aac|m4a)$/i,
    pdf: /\.(pdf)$/i,
    word: /\.(doc|docx)$/i,
    excel: /\.(xls|xlsx)$/i,
    powerpoint: /\.(ppt|pptx)$/i,
    text: /\.(txt|md|html|css|js|json|xml)$/i,
    zip: /\.(zip|rar|7z|tar|gz|bz2)$/i,
    code: /\.(js|json|html|css|js|json|xml)$/i,
};
export const fileTypeUpload={
    img:'image/png',
    video:'video/mp4',
    audio:'audio/mp3',
    pdf:'application/pdf',
    word:'application/msword',
    excel:'application/vnd.ms-excel',
    powerpoint:'application/vnd.ms-powerpoint',
    text:'text/plain',
    zip:'application/zip',
    code:'text/plain',
};
// powerpoint file types
export const fileTypePowerpoint={
    ppt:'application/vnd.ms-powerpoint',
    pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation',
};
// excel file types
export const fileTypeExcel={
    xls:'application/vnd.ms-excel',
    xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};
// word file types
export const fileTypeWord={
    doc:'application/msword',
    docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
// pdf file types
export const fileTypePdf={
    pdf:'application/pdf',
};
// text file types
export const fileTypeText={
    txt:'text/plain',
    md:'text/plain',
    html:'text/html',
    css:'text/css',
    js:'text/javascript',
    json:'application/json',
    xml:'application/xml',
};
// zip file types
export const fileTypeZip={
    zip:'application/zip',
    rar:'application/x-rar-compressed',
    '7z':'application/x-7z-compressed',
    tar:'application/x-tar',
    gz:'application/x-gzip',
    bz2:'application/x-bzip2',
};
// code file types
export const fileTypeCode={
    js:'text/javascript',
    json:'application/json',
    html:'text/html',
    css:'text/css',
    xml:'application/xml',
};
// image file types
export const fileTypeImage={
    jpg:'image/jpeg',
    jpeg:'image/jpeg',
    png:'image/png',
    gif:'image/gif',
    bmp:'image/bmp',
    svg:'image/svg+xml',
};
// video file types
export const fileTypeVideo={
    mp4:'video/mp4',
    webm:'video/webm',
    ogg:'video/ogg',
    mp3:'audio/mpeg',
    wav:'audio/x-wav',
    flac:'audio/flac',
    aac:'audio/aac',
    m4a:'audio/mp4',
};
// audio file types
export const fileTypeAudio={
    mp3:'audio/mpeg',
    wav:'audio/x-wav',
    flac:'audio/flac',
    aac:'audio/aac',
    m4a:'audio/mp4',
};
export const fixeTypesExtensitn={
    img:'.jpg,.jpeg,.png,.gif,.bmp,.svg',
    video:'.mp4,.webm,.ogg,.mp3,.wav,.flac,.aac,.m4a',
    audio:'.mp3,.w,v,.flac,.aac,.m4a',
    pdf:'.pf',
    word:'.doc,.docx',
    excel:'.xls,.xlsx',
    powerpoint:'.ppt,.pptx',
    text:'.txt,.md,.html,.css,.js,.json,.xml',
    zip:'zip,.rar,.7z,.tar,.gz,.bz2',
    e:'.js,.json,.html,.css,.js,.json,.xml',
};
export const fileTypes = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/bmp', 'image/svg+xml'],
        video: ['video/mp4', 'video/x-m4v', 'video/ogg', 'video/webm', 'video/quicktime'],
        audio: ['audio/mp3', 'audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/x-wav', 'audio/x-pn-wav', 'audio/webm'],
        video: ['video/mp4', 'video/ogg', 'video/webm'],
        audio: ['audio/mp3', 'audio/ogg', 'audio/wav', 'audio/mp4', 'audio/webm'],
        excel: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'],
        word: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
        pdf: ['application/pdf'],
        text: ['text/plain'],
        zip: ['application/zip', 'application/x-zip-compressed'],
        ppt: ['application/vnd.ms-powerpoint'],
        json: ['application/json', 'text/json'],
        csv: ['text/csv'],
        doc: ['application/msword'],
        pptx: ['application/vnd.openxmlformats-officedocument.presentationml.presentation'],
        docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        xls: ['application/vnd.ms-excel'],
        video: ['video/mp4', 'video/quicktime', 'video/ogg', 'video/webm', 'video/x-flv', 'video/x-ms-wmv', 'video/x-msvideo', 'video/3gpp', 'video/3gpp2', 'video/3gpp-tt', 'video/x-matroska', 'video/mp4'],
        video: ['video/mp4', 'video/x-m4v', 'video/quicktime', 'video/mov', 'video/avi', 'video/mpg', 'video/mpeg'],
        pdf: ['application/pdf'],
        word: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        powerpoint: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
        text: ['text/plain'],
        zip: ['application/zip'],
        audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/x-ms-wma', 'audio/x-ms-wax', 'audio/x-matroska', 'audio/x-aac', 'audio/mp4', 'audio/3gpp', 'audio/3gpp2'],
        word: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
        archive: ['application/zip', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-7z-compressed'],
        video: ['video/mp4', 'video/webm', 'video/ogg'],
        pdf: ['application/pdf'],
        text: ['text/plain', 'text/csv', 'text/html', 'text/xml', 'text/json', 'text/javascript'],
        audio: ['audio/mpeg', 'audio/ogg', 'audio/webm', 'audio/wav', 'audio/aac', 'audio/flac', 'audio/mp3', 'audio/mp4'],
        excel: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12', 'application/vnd.ms-excel.sheet.macroEnabled.12'],
};    