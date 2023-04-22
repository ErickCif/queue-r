# Welcome QueueR's documentation!

```eval_rst
.. toctree::
   :caption: QueueR
   
   faq
   code

.. note::
    Autodocumentation using sphinx-js in the works!
    
```

### RELEASE 0.0.1: THE BAREBONES
The barebones for QueueR has been released! The goal of this release is to have a roadmap for the application. As of now,
the user gets their "own" room where "other users" can submit song requests, but the rooms themselves are not dynamic and "live," so to speak.
The host cannot send out that link to anyone and have them join to start requesting songs. This is the next step!

[![GitHub issues](https://img.shields.io/github/issues/ErickCif/QueueR)](https://github.com/ErickCif/QueueR/issues)
[![Build Status](https://github.com/ErickCif/queue-r/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/ErickCif/queue-r/actions?query=workflow%3A%22Build+Status%22)
[![codecov](https://codecov.io/gh/ErickCif/queue-r/branch/main/graph/badge.svg)](https://codecov.io/gh/ErickCif/queue-r)
[![Documentation Status](https://readthedocs.org/projects/queue-r/badge/?version=latest)](https://queue-r.readthedocs.io/en/latest/?badge=latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</br>

[![Deployment Status](https://img.shields.io/github/deployments/ErickCif/queue-r/production?label=deployment&logo=vercel)](https://queue-r.vercel.app)
<center>
(All examples can be found deployed on Vercel to view and mess with) 
</center>

### The Host.
![Username Example](../images/username-example.png)
The "home" page has the user first choose their username. The name they choose will be attatched to their room as the host.
In creating their room, StreamChat will generate a token using this username.
### The Queue.
![Queue Example](../images/queue-example.png)
Then, they are greeted with a new page where users can request songs on the right and view the queue on the left.
In the case of the host, they can add songs as they wish and clear the queue when needed/wanted.
