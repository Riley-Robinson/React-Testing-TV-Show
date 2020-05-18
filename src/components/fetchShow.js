import axios from 'axios';


const fetchShow = () => {
    return axios
    .get(
        'https://api.tvmaze.com/singlesearch/shows?q=futurama&embed=episodes'
    )
      .then(res => {
        return res;
      });
    };
    export default fetchShow; 