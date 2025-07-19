function selectRole(role) {
  document.getElementById('role-selection').scrollIntoView({ behavior: 'smooth' });
}

function selectForm(role) {
  document.getElementById('guardian-form').classList.add('hidden');
  document.getElementById('patient-form').classList.add('hidden');

  if (role === 'guardian') {
    document.getElementById('guardian-form').classList.remove('hidden');
  } else {
    document.getElementById('patient-form').classList.remove('hidden');
  }
}
