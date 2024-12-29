# Overview of Learning from Data

This is a course on Bayesian statistics for physicists. This means that we aim to teach Bayesian methods, but the examples we choose are drawn predominantly from physics. 
We also build on physics intuition and employ mathematical skills that are a standard part of an undergraduate physics education. 

The course introduces a variety of methods and algorithms essential for performing scientific data analysis using statistical inference and machine learning. The emphasis is on practical applications of Bayesian inference in physics, i.e. the ability to quantify the strength of inductive inference from facts (such as experimental data) to propositions such as scientific hypotheses and models.

The course is project-based, and students will be exposed to some fundamental research problems through the various projects, with the aim to reproduce state-of-the-art scientific results. Students will use Jupyter notebooks for scientific data analysis examples, with Python as a programming language and including relevant open-source libraries.

<!-- 
## Instructors
* _Lecturer_: Dick Furnstahl
  * _Email_: furnstahl.1@osu.edu
  * _Office_: OSU Department of Physics, PRB, room M2048

* _Lecturer_: Daniel Phillips
  * _Email_: phillid1@ohio.edu
  * _Office_: Lindley Hall, S215
-->
  
<!-- !split -->

## Objectives

In recent years there has been an explosion of interest in the use of Bayesian methods in many sub-fields of physics. In nuclear physics (our specialty), these methods are being used to quantify the uncertainties in theoretical work on topics ranging from the inter-nucleon forces to high-energy heavy-ion collisions, develop more reliable extrapolants of nuclear-energy-density functionals towards the limits of nuclear existence, predict the impact that future NICER observations may have on the equation of state of neutron matter, and determine whether or not nucleon resonances are present in experimental data.

Meanwhile machine learning is gaining increased currency as a method for identifying interesting signals in both experiments and simulations. 

While most physics Ph.D. students are taught some standard (frequentist) statistics as part of their course work, relatively few encounter Bayesian methods until they are engaged in research. But Bayesian methods provide a coherent and compelling framework to think about inference, and so can be applied to many important questions in physics.The overall learning goal of this course is to show students who have had little or no previous exposure to Bayes’ theorem how it can be applied to the extraction of model parameters from data as well as how to use it to compare the efficacy of different models. We will also discuss machine learning tools for data analysis: simple ones such as Gaussian Processes, and more modern ones such as Neural Networks. 

Jupyter notebooks will be used extensively throughout the course, so this is also a great opportunity to develop Python skills further through using those notebooks. There will be several guided "mini-projects" on topics including Bayesian parameter estimation, model selection, Bayesian optimization, and Bayesian neutral networks. You will be asked to put together a "project" based on your own physics interests and using methods from the course. Grading will be based on Juypter-based problems and these projects.

## Learning outcomes
Upon completion of this course students should be able to:

- Apply the rules of probability to derive posterior probability distributions for simple problems involving prior information on parameters and various standard likelihood functions.
- Perform Bayesian parameter estimation, including in cases where marginalization over nuisance parameters is required.
- Use Monte Carlo sampling to generate posterior probability distributions and identify problems where standard sampling is likely to fail.
- Compute an evidence ratio and explain what it means.
- Explain machine learning from a Bayesian perspective and employ a testing and training data set to develop and validate a Gaussian-process model.
- Employ these methods in the context of specific physics problems (examples in class will often be taken from nuclear physics, but they have more general applicability).
- Be able to understand, appreciate, and criticize the growing literature on Bayesian statistics and machine learning for physics applications.

## Topics

The following topics will be covered (this is not an exclusive list):

- Basics of Bayesian statistics
- Bayesian parameter estimation
- Why Bayes is better
- MCMC sampling
- Assigning probabilities
- Model selection and model mixing
- Model checking
- Gaussian processes
- Special topic: Bayesian methods and machine learning. [Note: we will not cover machine learning in great detail, but learn about connections to Bayesian methods, e.g., with Bayesian neural networks as a working example.]
- Special topic: Emulators


## Moral qualities of the scientist

Adapted from G. Polya, Induction and Analogy in Mathematics, chapter 1, section 4, which is entitled "The Inductive Attitude".

Intellectual courage
: One should be ready to revise any one of our beliefs.

Intellectual honesty
: One should change a belief when there is a compelling reason to do so. To stick to a conjecture clearly contradicted by experience is dishonest. It is also dishonest to ignore information or not to state and criticize all assumptions.

Wise restraint
: One should not change a belief wantonly, without some good reason. Don't just follow fashion. Do not believe anything, but question only what is worth questioning.



<!-- ======= Acknowledgements ======= -->




