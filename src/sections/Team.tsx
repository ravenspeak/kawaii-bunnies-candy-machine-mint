import * as React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia
} from "@mui/material";

export default function Team() {
    return (
        <Container maxWidth='lg'>
            <Typography variant="h4" align="center">
                Team
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} alignContent='center' mb={5}>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="profile_ballerina.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Edelweiss
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Artist
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} alignContent='center' mb={5}>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="profile_tuxedo.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ravenspeak
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Developer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}