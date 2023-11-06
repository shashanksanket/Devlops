const transformJoinFields = function(context) {
  if (context.params.query && context.params.query.fields) {
    context.params.fields = context.params.query.fields;
    delete context.params.query.fields;
  }
  return context;
};
module.exports = transformJoinFields;
