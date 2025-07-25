import styled from "@emotion/styled";
import { Favorite } from "@mui/icons-material";
import { Rating } from "@mui/material";

type BarProps = {
  rating: number;
  showText: boolean;
}

const StyledRating = styled(Rating)({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  }
});

const HEALTHBAR_TEXTS = [
  "The patient is in great shape",
  "The patient has a low risk of getting sick",
  "The patient has a high risk of getting sick",
  "The patient has a diagnosed condition",
];

const HealthRatingBar = ({rating, showText}: BarProps) => {
  return(
    <div>
      <StyledRating
        readOnly
        value={4 - rating}
        max={4}
        icon={<Favorite fontSize="inherit"/>}
      />

      {
        showText 
          ? <p>{HEALTHBAR_TEXTS[rating]}</p> 
          : null
      }
    </div>
  )
}

export default HealthRatingBar