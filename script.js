$(document).ready(function () {
    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click keypress', function (event) {
        // event.which === 13 means the "Enter" key is pressed

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {

            var tabClicked = $(this).data("tab-index");

            if(tabClicked != previousActiveTabIndex) {
                $(".menu-list-container .tab-container").each(function () {
                    if($(this).data("tab-index") == tabClicked) {
                        $(".tab-container").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
        }
    });
});
