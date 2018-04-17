
$(document).ready(function(){

	$('.delete-customer').on('click', function(){
		var id = $(this).data('id');
		var url = '/delete/' + id;
		if(confirm('Delete customer?')) {
			$.ajax({
				url: url,
				type: 'DELETE',
				success: function(result){
					console.log('Deleting customer....');
					window.location.href = '/';
				},
				error: function(err){
					console.log(err);
				}
			});
		}
		
	});

	$('.edit-customer').on('click', function(){
		$('#edit-form-id').val($(this).data('id'));
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-address').val($(this).data('address'));
		$('#edit-form-email').val($(this).data('email'));
		$('#edit-form-phone').val($(this).data('phone'));
	});
});