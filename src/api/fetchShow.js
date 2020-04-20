    import axios from 'axios';


export const fetchShow = () => {
    return axios
    .get(
        'https://api.tvmaze.com/singlesearch/shows?q=blacklist&embed=episodes'
    )
      .then(res => {
        return res;
      });
    };
