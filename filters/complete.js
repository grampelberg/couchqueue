function(doc, req) {
  if(doc.status == 'complete') {
    return true;
  }

  return false;
}