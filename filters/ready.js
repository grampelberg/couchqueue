function(doc, req) {
  var type = null;
  if ('type' in req.query)
    type = req.query.type;

  if (type && doc.status == type) {
    return true;
  } else if (!type && !('status' in doc)) {
    return true;
  }

  return false;
}