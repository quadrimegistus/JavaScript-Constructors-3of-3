const TV = function() {
  this.findShow = (show) => {
    // The following URL can be used to search the TV Maze API for a given show
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  };
};

module.exports = TV;
