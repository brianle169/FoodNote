import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from '@react-pdf/renderer';

export default function RecipePDF({ recipe }) {
    return (
        <Document>
            <Page
                size="LETTER"
                style={styles.page}
            >
                <View
                    className="pdf-recipe-name"
                    style={styles.recipeName}
                >
                    <Text>{recipe.recipeName}</Text>
                </View>
                <View style={styles.recipeInfo}>
                    <View style={styles.recipeInfoItem}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Preparation:{' '}
                            <Text style={{ fontWeight: 'normal' }}>
                                {recipe.prepTime} minutes
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.recipeInfoItem}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Cooking:{' '}
                            <Text style={{ fontWeight: 'normal' }}>
                                {recipe.cookTime} minutes
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.recipeInfoItem}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Total time:{' '}
                            <Text style={{ fontWeight: 'normal' }}>
                                {recipe.totalTimeString()}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.recipeInfoItem}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Servings:{' '}
                            <Text style={{ fontWeight: 'normal' }}>
                                {recipe.servings}
                            </Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subheader}>Ingredients</Text>
                    {recipe.ingredients.map((ingredient, index) => {
                        return (
                            <ListItem key={index}>
                                {ingredient.toString()}
                            </ListItem>
                        );
                    })}
                </View>
                <View>
                    <Text style={styles.subheader}>Instructions</Text>
                    {recipe.instructions.map((instruction, index) => {
                        return (
                            <ListItem
                                key={index}
                                bullet={index + 1}
                            >
                                {instruction}
                            </ListItem>
                        );
                    })}
                </View>
            </Page>
        </Document>
    );
}

const ListItem = ({ children, bullet }) => {
    return (
        <View style={styles.row}>
            <View style={styles.bullet}>
                <Text style={{ fontSize: 12 }}>
                    {bullet ? bullet + '. ' : '\u2022' + ' '}
                </Text>
            </View>
            <Text style={styles.recipeInfoItem}>{children}</Text>
        </View>
    );
};

Font.register({
    family: 'Noto Sans',
    fonts: [
        {
            src: 'http://fonts.gstatic.com/s/notosans/v6/LeFlHvsZjXu2c3ZRgBq9nKCWcynf_cDxXwCLxiixG1c.ttf',
            fontWeight: 'normal',
        },
        {
            src: 'http://fonts.gstatic.com/s/notosans/v6/PIbvSEyHEdL91QLOQRnZ19qQynqKV_9Plp7mupa0S4g.ttf',
            fontWeight: 'bold',
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 32,
        marginRight: 32,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Noto Sans',
    },
    recipeName: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    recipeInfo: {
        marginTop: 16,
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        fontWeight: 'normal',
    },
    recipeInfoItem: {
        marginBottom: 6,
        fontSize: 12,
        fontWeight: 'normal',
    },
    subheader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 24,
        marginRight: 24,
        fontWeight: 'normal',
    },
    bullet: {
        height: '100%',
        fontWeight: 'normal',
    },
});
