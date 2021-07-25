import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  heightAuto: false,
  toast: true
})
