import { useState, useEffect } from 'react';
import api from '../api';

const CareerSearch = () => {

    // const [newInstitute, setNewInstitute] = useState({
    //     name:'',
    //     location: '',
    //     department: ''
    // })

    const [institutes, setInstitute] = useState([]);

    const getInstitute = async () => {
        try {
            // setLoading(true);
            let {data} = await api.get('/rlss/institutes');
            console.log("RESP", data);
            setInstitute(data);
        } catch (err) {
            console.error(err.message);
        }
        // } finally {
        //     setLoading(false);
        // }
    }

    useEffect(() => {
        getInstitute();
    }, [])

    // const onChange = ({ target: { name, value } }) => setNewInstitute({ ...newInstitute, [name]: value })

    return (
        <div className="container">
            <h1 className="my-4 py-4">Search for Career</h1>
            <form>
                <input className="mb-3 p-2 col-lg-10 rounded" type="text" name="keyword" placeholder="try some keywords" onChange={getInstitute} />
                <select className="my-3 mx-2 p-2 col-lg-3 rounded" name="location" placeholder="Location">
                    <option value="Delhi">Delhi</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <select className="my-3 mx-2 p-2 col-lg-3 rounded" name="department" placeholder="Department">
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="B. Sc.">B. Sc.</option>
                    <option value="B. C. A.">B. C. A.</option>
                    <option value="B. Tech.">B. Tech.</option>
                </select>
                <select className="my-3 mx-2 p-2 col-lg-3 rounded" name="feeRange" placeholder="Fees Range">
                    <option value="oneLPA">1 LPA</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </form>
            <hr/>
            <ul className='list-group'>
                {
                    institutes.map(institute => (
                        <li className='list-group-item' key={institute._id}>{institute._name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CareerSearch
