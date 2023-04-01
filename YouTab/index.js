(function(d,e,s,u,a,h,t,g){"use strict";const n=e.stylesheet.createThemedStyleSheet({container:{backgroundColor:t.semanticColors.BACKGROUND_MOBILE_SECONDARY,flex:1},card:{backgroundColor:t.semanticColors.BACKGROUND_MOBILE_PRIMARY,color:t.semanticColors.TEXT_NORMAL},header:{backgroundColor:t.semanticColors.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:t.semanticColors.HEADER_PRIMARY},headerTitle:{fontFamily:e.constants.Fonts.PRIMARY_BOLD,color:t.semanticColors.HEADER_PRIMARY},backIcon:{tintColor:t.semanticColors.INTERACTIVE_ACTIVE,marginLeft:15,marginRight:20}});function i(o){let{title:r,children:l}=o;const c=e.navigationStack.createStackNavigator();return React.createElement(g.ErrorBoundary,null,React.createElement(e.NavigationNative.NavigationContainer,{independent:!0},React.createElement(c.Navigator,{initialRouteName:r,style:n.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:n.card,headerStyle:n.header,headerTitleContainerStyle:n.headerTitleContainer}},React.createElement(c.Screen,{name:r,component:l,options:{headerTitleStyle:n.headerTitle,headerLeft:function(){return React.createElement(e.ReactNative.TouchableOpacity,{onPress:function(){return e.navigation.pop()}},React.createElement(e.ReactNative.Image,{style:n.backIcon,source:a.getAssetIDByName("back-icon")}))}}}))))}const R=s.findByName("useSettingGroups",!1),f=s.findByName("getScreens"),{getCurrentUser:v}=s.findByStoreName("UserStore");function C(){return u.after("default",R,function(o,r){const{VendettaSettings:l,VendettaPlugins:c,VendettaThemes:m,VendettaDeveloper:p}=f(v()),y=r.findIndex(function(A){return A.name===e.i18n.Messages.APP_SETTINGS});r.splice(y,0,{name:"Vendetta",settings:[{name:"General",icon:a.getAssetIDByName("settings"),onPress:function(){return e.navigation.push(i,{title:"General",children:l.render})}},{name:"Plugins",icon:a.getAssetIDByName("debug"),onPress:function(){return e.navigation.push(i,{title:"Plugins",children:c.render})}},...h.identity?.features.themes?[{name:"Themes",icon:a.getAssetIDByName("ic_theme_24px"),onPress:function(){return e.navigation.push(i,{title:"Themes",children:m.render})}}]:[],{name:"Developer",icon:a.getAssetIDByName("ic_progress_wrench_24px"),onPress:function(){return e.navigation.push(i,{title:"Developer",children:p.render})}}]})})}const E=[C()],N=function(){return E.forEach(function(o){return o()})};return d.onUnload=N,d})({},vendetta.metro.common,vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.loader,vendetta.ui,vendetta.ui.components);
