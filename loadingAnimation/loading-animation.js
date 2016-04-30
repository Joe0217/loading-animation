/**
 * Created by Joe on 16/4/29.
 */
var loading = {
    lazyLoading1: function () {
        var loadCon = '<div class="loading-content lazy-loading1"><ul class="loading1-container1"><li></li><li></li><li></li><li></li></ul><ul class="loading1-container2"><li></li><li></li><li></li><li></li></ul></div>';
        loadModel(loadCon);
    },
    lazyLoading2:function(){
        var loadCon = '<div class="loading-content lazy-loading2"><ul class="lazy-loading2-line"><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>';
        loadModel(loadCon);
    },
    closeLazyLoading: function () {
        $("#loadingModel").remove();
    }
};

function loadModel(LoadCon){
    var loadingModel = '<div id="loadingModel" class="loading-model"><div class="loading-mask">'+LoadCon+'</div></div>';
    $("body").append(loadingModel);
}