function changeFormName(event) {
  // The value of the subject field.
  var value = event.target.value;
  // The name we want to apply to the form, based on the value.
  var name = 'Contact-' + value;
  // The form element in the DOM.
  var form = document.querySelector('#conditional-form');
  // Apply the new name to the form's [name] attribute.
  if (form) form.setAttribute('name', name);
  // The [name="form-name] field in the DOM.
  var formName = document.querySelector('#conditional-form [name="form-name"]');
  // Apply the new name to the [name="form-name"] field within the form.
  if (formName) formName.setAttribute('value', name);
}
