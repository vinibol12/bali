angular.module('baliTrip', [])
  .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.test = 'Partiu Bali';
            $scope.posts = [];
            $scope.addPost = function(){
                if (!$scope.title || $scope.title === ''){
                    alert('Post sem titulo nao vale')
                    return;}
                if (!$scope.description || $scope.description === ''){
                    alert('Post sem descriçao nao vale')
                    return;}
                $scope.posts.push({title: $scope.title,
                                   description: $scope.description,
                                   link: $scope.link,
                                   upvotes: 0});
                $scope.title = '';
                $scope.description = '';
                $scope.link = '';
            }
            $scope.incrementUpvotes = function(post){
                post.upvotes += 1;
            }
        }
    ]);
