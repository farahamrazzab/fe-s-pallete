function notification(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Item has been Added to Cart",
        showConfirmButton: false,
        timer: 1500
      });
}
function bookNow() {
  Swal.fire({
      title: 'Enter your name',
      input: 'text',
      inputPlaceholder: 'Enter your name',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      preConfirm: (name) => {
        if (!name) {
          Swal.showValidationMessage('Please enter your name!');
          return false;
        }
        return name;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const userName = result.value;
            Swal.fire({
          title: 'Confirm Booking',
          text: `Is this correct? Name: ${userName}`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel'
        }).then((confirmResult) => {
          if (confirmResult.isConfirmed) {
            Swal.fire({
              title: 'Booking Confirmed!',
              text: `Thank you, ${userName}. Your booking is complete.`,
              icon: 'success'
            });
          }
        });
      }
    });
  }



 