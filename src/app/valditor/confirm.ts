import { AbstractControl } from '@angular/forms';

export function fomfarmpasword(confarm: AbstractControl) {
  const password = confarm.get('password');
  const confairmpasword = confarm.get('confirmpassword');
  if (password?.pristine || confairmpasword?.pristine) {
    return null;
  }
  return password && confairmpasword && password.value !== confairmpasword.value
    ? { 'abstrac': true }
    : null;
}
