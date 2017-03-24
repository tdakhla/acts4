angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('menu.home', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/home.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.myCommunities', {
      url: '/community',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myCommunities.html'
        }
      }
    })
        
      
    
      
        
    .state('coolFriendGroupMembers', {
      url: '/community/cool-friend-group/members',
      templateUrl: 'templates/coolFriendGroupMembers.html'
    })
        
      
    
      
        
    .state('coolFriendGroupTamerD', {
      url: '/community/cool-friend-group//tamerd',
      templateUrl: 'templates/coolFriendGroupTamerD.html'
    })
        
      
    
      
        
    .state('menu', {
      url: '/main-menu',
      templateUrl: 'templates/menu.html'
    })
        
      
    
      
        
    .state('menu.give', {
      url: '/community/give',
      views: {
        'side-menu21': {
          templateUrl: 'templates/give.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.settings', {
      url: '/settings',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
        
    .state('communityCoolFriendGroup', {
      url: '/communiity/cool-friend-group',
      templateUrl: 'templates/communityCoolFriendGroup.html'
    })
        
      
    
      
        
    .state('createACommunity', {
      url: '/community/create',
      templateUrl: 'templates/createACommunity.html'
    })
        
      
    
      
        
    .state('editCoolFriendGroupCommunity', {
      url: '/community/cool-friend-group/edit',
      templateUrl: 'templates/editCoolFriendGroupCommunity.html'
    })
        
      
    
      
        
    .state('joinNewCommunity', {
      url: '/communiity/join',
      templateUrl: 'templates/joinNewCommunity.html'
    })
        
      
    
      
        
    .state('giveToCoolFriendGroup', {
      url: '/community/cool-friend-group/give',
      templateUrl: 'templates/giveToCoolFriendGroup.html'
    })
        
      
    
      
        
    .state('requestFromCoolFriendGroup', {
      url: '/community/cool-friend-group/request',
      templateUrl: 'templates/requestFromCoolFriendGroup.html'
    })
        
      
    
      
        
    .state('coolFriendGroupRequests', {
      url: '/community/cool-friend-group/requests',
      templateUrl: 'templates/coolFriendGroupRequests.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/main-menu/home');
  

  

});