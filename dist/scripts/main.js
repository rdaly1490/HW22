$(document).ready(function() {

	var imgList = new ImgCollection();

	imgList.fetch();

	var imgPostBuilder = _.template($("#post-template").html());


	$("#submit-img").on("click", function(e){
		e.preventDefault();

		var newImg = new Img({
			imgUrl: $("#url").val(),
			caption: $("#img-caption").val()
		});

		if(newImg.isValid()) {
			imgList.add(newImg);
			newImg.save();
			$("#collapseExample").removeClass("in");
		}
		else {
			alert(newImg.validationError);
		}
	});

	imgList.on("add", function(imgModel) {
		var displayPost = imgPostBuilder(imgModel.attributes);
		$("#pics-container").append(displayPost);
	});

	$("#cancel").on("click", function(e) {
		e.preventDefault();
		$("#collapseExample").removeClass("in");
	});

});

// imgList.fetch({
// 	success: function(imageObj) {
// 		imageObj.forEach(function(model)) {
// 			$("#pics-container").append(imgPostBuilder(imgModel.attributes))
// 		});
// 		imageObj.on("add", function(e) {
// 			$("#pics-container").prepend(imgPostBuilder(imgModel.attributes))
// 		});
// 	}
// });