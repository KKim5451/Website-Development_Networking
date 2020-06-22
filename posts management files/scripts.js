function saveFunction() {
    var postTitle = document.getElementById("Title").value;
    var postContent = document.getElementById("Contents").value;
    console.log(postTitle);
    module.exports.postTitle = postTitle;
    module.exports.postContent = postContent;
}
