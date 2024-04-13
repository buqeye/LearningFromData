# Extra: Reduced Basis Method Emulators

Based on a talk by Dick Furnstahl. See the end for references.


## Motivation for RBM emulators

::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/timeline_landscape_nuclei_2023.png
:width: 100%
:name: timeline_nuclides

Screenshot from the end of a YouTube video called [*Timeline of the Discovery of Nuclides*](https://frib.msu.edu/public/nuclides).
```
:::
::::

::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/Hergert_nuclide_chart_2024.png
:width: 100%
:name: Hergert_nuclides_2024

Table of Nuclides showing progress in ab initio calculations (2024 version).
```
:::
::::



::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/many_body_HO_basis.png
:width: 100%
:name: many_body_HO_basis
```
:::
::::



::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/challenges_many-body_theory.png
:width: 100%
:name: challenges_many-body_theory
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/emulator_def.png
:width: 100%
:name: emulator_def
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/BAND_overview.png
:width: 100%
:name: BAND_overview
```
:::
::::

::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/universe_of_ROMs.png
:width: 100%
:name: universe_of_ROM
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/snapshot_RBM_emulators_1.png
:width: 100%
:name: snapshot_RBM_emulators_1
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/snapshot_RBM_emulators_2.png
:width: 100%
:name: snapshot_RBM_emulators_2
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/fast_and_accurate_RBM_emulators.png
:width: 100%
:name: fast_and_accurate_RBM_emulators
```
:::
::::







## Simple model for eigenvalue RBM


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/
:width: 100%
:name: 
```
:::
::::





## Extensions


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_scattering_1.png
:width: 100%
:name: RBM_scattering_1
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_scattering_2.png
:width: 100%
:name: RBM_scattering_2
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_scattering_3.png
:width: 100%
:name: RBM_scattering_3
```
:::
::::


::::{grid} 
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_nonaffine_1.png
:width: 100%
:name: RBM_nonaffine_1
```
:::
::::


::::{grid} 
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_nonaffine_2.png
:width: 100%
:name: RBM_nonaffine_2
```
:::
::::


::::{grid} 
:gutter: 1

:::{grid-item}
```{figure} /_images/RBM_nonaffine_3.png
:width: 100%
:name: RBM_nonaffine_3
```
:::
::::


::::{grid} 
:gutter: 1

:::{grid-item}
```{figure} /_images/extrapolation_hubbard.png
:width: 100%
:name: extrapolation_hubbard
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/improved_MBPT.png
:width: 100%
:name: improved_MBPT

Improved many-body perturbation theory (MBPT).
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/emulating_pairing.png
:width: 100%
:name: emulating_pairing

Emulating pairing.
```
:::
::::



::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/emulating_phase_structure.png
:width: 100%
:name: emulating_phase_structure

Greedy algorithm for emulation.
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/cartoon_greedy_algorithm.png
:width: 100%
:name: cartoon_greedy_algorithm

Cartoon summary of greedy algorithm.
```
:::
::::


::::{grid}
:gutter: 1

:::{grid-item}
```{figure} /_images/summary_RBM.png
:width: 100%
:name: summary_RBM
```
:::
::::


## References

### References with nuclear applications
 All of these have pointers to the broad RBM literature.

* [Eigenvector Continuation and Projection-Based Emulators](https://inspirehep.net/literature/2715640) (Duguet et al., 2024)
* [BUQEYE Guide to Projection-Based Emulators in Nuclear Physics](https://www.frontiersin.org/articles/10.3389/fphy.2022.1092931/full) (Drischler et al., 2022)
* [Model reduction methods for nuclear emulators](https://iopscience.iop.org/article/10.1088/1361-6471/ac83dd) (Melendez et al., 2022)
* [Training and Projecting:  A reduced basis method emulator for many-body physics](https://journals.aps.org/prc/abstract/10.1103/PhysRevC.106.054322) (Bonilla et al., 2022)
* [Bayes goes fast: Uncertainty Quantification for a Covariant Energy Density Functional emulated by the Reduced Basis Method](https://arxiv.org/abs/2209.13039) (Giuliani et al, 2023)
* [ROSE: A reduced-order scattering emulator for optical models](https://inspirehep.net/literature/2738540) (Odell et al., 2024)

### Jupyter and Quarto books for nuclear applications

* [BUQEYE Guide to Projection-Based Emulators in Nuclear Physics](https://github.com/buqeye/frontiers-emulator-review)
* [Reduced Basis Methods in Nuclear Physics](https://kylegodbey.github.io/nuclear-rbm/introduction/introduction.html)

### Websites
* [**BAND**](https://bandframework.github.io/) (Bayesian Analysis of Nuclear Dynamics)
* [**BUQEYE**](https://buqeye.github.io/) (Bayesian Uncertainity Quantification: Errors for Your EFT)

