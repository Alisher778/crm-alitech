import { FETCH_COURSES } from './actionTypes';

export const initialDataFetch = (firebase) => {
    return firebase.get().then(data => {
                const {docs} = data;
                let courseData = [];
                docs.forEach(item => {
                    let dataWithId = {id: item.id,...item.data()}
                    courseData.push(dataWithId)
                })
                this.setState({courses: courseData})
                this.props.addToCourses(courseData);
            });
}

export const fetchCourses = (data) => {
    return {
        type: FETCH_COURSES,
        courses: data
    }
}
