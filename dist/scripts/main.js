$(document).ready(function() {

	var imgList = new ImgCollection();

	var imgPostBuilder = _.template($("#post-template").html());


	$("#submit-img").on("click", function(e){
		e.preventDefault();

		var newImg = new Img({
			imgUrl: $("#url").val(),
			caption: $("#img-caption").val()
		});

		if(newImg.isValid()) {
			imgList.add(newImg);
		}
		else {
			alert(newImg.validationError);
		}
	});

	imgList.on("add", function(imgModel) {
		var displayPost = imgPostBuilder(imgModel.attributes);
		$("#pics-container").append(displayPost);
	})

	$("#cancel").on("click", function(e) {
		e.preventDefault();
		$("#collapseExample").removeClass("in");
	})









})