function(doc, req) {
  if(doc.status == 'progress') {
    return true;
  }

  return false;
}