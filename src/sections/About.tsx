import {
    Container,
    Typography,
    Grid
} from "@mui/material";

export default function About() {
    return (
        <Container maxWidth='lg' sx={{ mb: 2, mt: 2 }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3">
                        Welcome to Kawaii Bunnies!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src='brown.png' alt='Kawaii Bunnies' width={500} />
                </Grid>
            </Grid>
        </Container>
    );
}