$('document').ready(function(){
    $('#edit-profile').click(function(){
        $('#fileinput,#picUpload').trigger('click');
    });
    $('#edit-pic,#edit-pic2').click(function(){
        $('#picUpload').trigger('click');
    });
    $('#edit-banner,#upload-errand').click(function(){
        $('#bannerInput,#errand-image').trigger('click');
    });

    $('#upload-errand').click(function(){
        $('#errand-image').trigger('click');
    });

    var dSelect = $('#durationSelect');
    if(dSelect.val('hours')){
        $('').removeClass('hidden');
    }
});
