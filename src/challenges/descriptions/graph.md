# Parcours de graph
## Règles
Pour ce faire, vous devez parcourir un [graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) et trouver le
chemin le plus court entre deux noeuds donnés. Pour un même poids, un **chemin avec moins de noeud doit être favorisé**.

À la fin, vous devez imprimer chaque noeud visité en ordre. Votre liste doit inclure le noeud initial et le noeud final.
Les noeuds sont indiqués par des chiffres commençants à 0 et terminant au nombre de noeuds moins 1.

Les arcs sont définis par la source, la destination et le prix de déplacement. À noter, les arcs sont 
**unidirectionnels**.

![Graph](https://github.com/carapas/CSGamesSelectionPublic/blob/master/Graph/graph.png?raw=true "Graph shit")

## Intéraction avec la plateforme
### Inputs
**Ligne 1**: Le nombre de noeud.

**Ligne 2**: Le nombre d'arc `N`.

**Ligne 3**: Le noeud initial.

**Ligne 4**: Le noeud de destination.

**Ligne N**: Les arcs.

### Output
Vous devez outputer dans le stdout la list de noeuds parcourus.

**Ligne 1**: Le noeud initial.

**Ligne 2 à N**: Les noeuds intermédiaires.

**Ligne N**: Noeud final.

### Exemple
**Input**
```
4
4
0
2
0 1 2
1 2 4
1 3 5
2 3 3
```
**Output**
```
0
1
3
```
