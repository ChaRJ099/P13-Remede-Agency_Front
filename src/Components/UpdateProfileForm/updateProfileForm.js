import { useState } from "react";
import { updateProfile } from "../../services/user-services";
import { useSelector } from "react-redux";
import "./update-profile-form.scss";

function ProfileForm() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  // toogle Form display true or false
  const toogleForm = (e) => {
    e.preventDefault();
    return setFormDisplay(!formDisplay);
  };

  const updateProfileOnSubmit = (e) => {
    e.preventDefault();
    const userPayload = {
      user: {
        firstName,
        lastName,
        token,
      },
    };
    updateProfile(userPayload);
  };

  if (formDisplay) {
    return (
      <form className="profile-form" onSubmit={updateProfileOnSubmit}>
        <div className="profile-form__inputs-group">
          <input
            type="text"
            className="input-firstname"
            placeholder={user.firstName}
            onChange={(i) => setFirstName(i.target.value)}
          ></input>
          <input
            type="text"
            className="input-lastname"
            placeholder={user.lastName}
            onChange={(i) => setLastName(i.target.value)}
          ></input>
        </div>
        <div className="profile-form__buttons-group">
          <button className="profile-header__save-button">Save</button>
          <button
            onClick={toogleForm}
            type="button"
            className="profile-header__cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button className="profile-header__edit-button" onClick={toogleForm}>
        Edit Name
      </button>
    );
  }
}

export default ProfileForm;
