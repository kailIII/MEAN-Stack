angular.module('flapperNews', [])
	.factory('posts', [function(){
		var o = {
			posts: [
			  {title: 'post 1', upvotes: 5, link: 'https://www.google.com'},
			  {title: 'post 2', upvotes: 2},
			  {title: 'post 3', upvotes: 15},
			  {title: 'post 4', upvotes: 9},
			  {title: 'post 5', upvotes: 4}
			]
		};
		return o;
}]);

angular.module('flapperNews').controller('MainCtrl', [
	'$scope', 'posts',
	function($scope, posts){
  		$scope.test = 'Hello world!';
  		$scope.posts = posts.posts;

		$scope.addPost = function(){
		  $scope.posts.push({title: 'A new post!', upvotes: 0});
		};

		$scope.addPostText = function(){
			if(!$scope.title || $scope.title === '') { return; }
		  	$scope.posts.push({title: $scope.title, upvotes: 0});
		  	$scope.title = '';
		};

		$scope.incrementUpvotes = function(post) {
 			post.upvotes += 1;
		};

		$scope.addPostLink = function(){
		  if(!$scope.title || $scope.title === '') { return; }
		  $scope.posts.push({
		    title: $scope.title,
		    link: $scope.link,
		    upvotes: 0
		  });
		  $scope.title = '';
		  $scope.link = '';
		};
	}
]);

