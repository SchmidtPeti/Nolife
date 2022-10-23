const userName = (handleChange) => {
    return(
    <div className="auth__form-container_fields-content_input">
    <label htmlFor="username">Username</label>
        <input 
            name="username" 
            type="text"
            placeholder="Username"
            onChange={handleChange}
            required
            />
    </div>
    )
}

const fullName = (handleChange) => {
    return(
        <div className="auth__form-container_fields-content_input">
        <label htmlFor="fullName">Full Name</label>
        <input 
            name="fullName" 
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
        />
    </div>
    )
}
const phoneNumber = (handleChange) => {
    return (
        <div className="auth__form-container_fields-content_input">
            <label htmlFor="phoneNumber">Phone number</label>
            <input 
                name="phoneNumber" 
                type="text"
                placeholder="Phone number"
                onChange={handleChange}
                required
            />
        </div>
    )
}
const avatarURL = (handleChange) => {
    return (
        <div className="auth__form-container_fields-content_input">
        <label htmlFor="avatarURL">Avatar Url</label>
        <input 
            name="avatarURL" 
            type="text"
            placeholder="Avatar URL"
            onChange={handleChange}
            required
        />
    </div>
    )
}
const password = (handleChange) => {
    return (
        <div className="auth__form-container_fields-content_input">
        <label htmlFor="password">Password</label>
        <input 
            name="password" 
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
        />
    </div>
    )
}
const confrimPassWord = (handleChange) => {
        return (
            <div className="auth__form-container_fields-content_input">
            <label htmlFor="passwordConfirm">Password confirm</label>
            <input 
                name="confirmPassword" 
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                required
            />
        </div>
        )
}
export {phoneNumber,avatarURL,password,fullName,userName,confrimPassWord};