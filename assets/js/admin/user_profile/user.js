"use strict";
var KTUserProfile = {
    init: function () {
        $('#kt_subheader_mobile_toggle').removeClass('kt-hide');
        new KTOffcanvas("kt_user_profile_aside", {
            overlay: !0,
            baseClass: "kt-app__aside",
            closeBy: "kt_user_profile_aside_close",
            toggleBy: "kt_subheader_mobile_toggle"
        }), new KTAvatar("kt_user_avatar")
    }
};

KTUtil.ready(function () {
    KTUserProfile.init()
});